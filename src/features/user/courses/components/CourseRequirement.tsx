import { ListItem, Typography } from '@mui/material';
import { RequirementWrapper } from '../style';
import CircleIcon from '@mui/icons-material/Circle';

const CourseRequirement = ({ requirement }: { requirement: string }) => {
	return (
		<RequirementWrapper>
			<ListItem>
				<CircleIcon />
				<Typography variant='subtitle1' component={'span'}>
					{requirement}
				</Typography>
			</ListItem>
		</RequirementWrapper>
	);
};

export default CourseRequirement;
