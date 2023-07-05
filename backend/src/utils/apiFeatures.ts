/* eslint-disable @typescript-eslint/no-explicit-any */
import { Query, FilterQuery } from 'mongoose'

interface IQueryString {
  page: number
  limit: number
  sort: string
  fields: string
}

class ApiFeatures {
  query: Query<any[], any, any, 'find'>
  queryString: Partial<IQueryString>
  total: number
  totalPages: number
  page: number

  constructor(query: Query<any[], any, any, 'find'>, queryString: Partial<IQueryString>) {
    this.query = query
    this.queryString = queryString
    this.total = 0
    this.page = 0
    this.totalPages = 0
  }

  async filter() {
    const queryObj: { [key: string]: any } = { ...this.queryString }
    const excludedFields = ['page', 'sort', 'limit', 'fields']
    excludedFields.forEach((el) => delete queryObj[el])

    const collectionFields = Object.keys(this.query.model.schema.paths)
    Object.keys(queryObj).forEach((key) => {
      if (!collectionFields.includes(key)) {
        delete queryObj[key]
      }
    })

    const query: FilterQuery<any> = Object.keys(queryObj).reduce((acc, key) => {
      if (typeof queryObj[key] === 'string') {
        acc[key] = { $regex: queryObj[key], $options: 'i' }
      } else {
        acc[key] = queryObj[key]
      }
      return acc
    }, {} as { [key: string]: any })

    let queryStr = JSON.stringify(query)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
    this.query = this.query.find(JSON.parse(queryStr))

    this.total = await this.query.model.countDocuments(JSON.parse(queryStr))

    return this
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ')
      this.query = this.query.sort(sortBy)
    } else {
      this.query = this.query.sort('-createdAt')
    }

    return this
  }

  // limitFields() {
  //   if (this.queryString.fields) {
  //     const fields = this.queryString.fields.split(',').join(' ')
  //     this.query = this.query.select(fields)
  //   } else {
  //     this.query = this.query.select('-__v')
  //   }

  //   return this
  // }

  paginate() {
    const page = this.queryString.page || 1
    const limit = this.queryString.limit || 10

    if (page < 1 || limit < 1) {
      throw new Error('Page and limit must be greater than or equal to 1')
    }

    this.page = +page
    this.totalPages = Math.ceil(this.total / +limit)

    const skip = (page - 1) * limit
    this.query = this.query.skip(skip).limit(limit)

    return this
  }
}
export default ApiFeatures
