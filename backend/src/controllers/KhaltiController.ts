import catchAsync from '@Middleware/catchAsync'
import ErrorHandler from '@Utils/errorHandler'
import axios from 'axios'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const khaltiVerification = catchAsync(async (req, res) => {
  const data = {
    token: 'XENUET9CFoYaYMJZ9MgLWE',
    amount: 5000,
  }

  await axios
    .post('https://a.khalti.com/api/v2/payment/verify/', data, config)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
})

export const khaltiPayment = catchAsync(async (req, res, next) => {
  const options = {
    public_key: '9e154dff6b3c4407a9b5ca82f7809beb',
    mobile: '9817922656',
    transaction_pin: '1001',
    amount: 1000,
    product_identity: '1145',
    product_name: 'books',
    product_url: 'https://docs.khalti.com/checkout/diy-wallet/',
  }

  try {
    const data = await axios
      .post('https://a.khalti.com/api/v2/payment/initiate/', options, config)
      .then((response) => {
        console.log(response)
      })
    res.status(200).json({
      success: true,
      data: data,
    })
  } catch (error) {
    console.log(error)

    next(new ErrorHandler(error as string, 200))
  }
})
