import { ListItem, Typography } from '@mui/material';
import { RequirementWrapper } from '../style';
import CircleIcon from '@mui/icons-material/Circle';

const CourseDataList = ({ data, sn }: { data: string; sn?: number }) => {
	return (
		<RequirementWrapper>
			<ListItem>
				{!sn ? (
					<CircleIcon className='bullet' />
				) : (
					<Typography variant='subtitle1' component={'pre'}>
						{sn}.
					</Typography>
				)}

				<Typography variant='subtitle1' component={'span'}>
					{data}
				</Typography>
			</ListItem>
		</RequirementWrapper>
	);
};

export default CourseDataList;
