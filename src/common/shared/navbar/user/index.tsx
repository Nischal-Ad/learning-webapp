import Section from '@Components/SectionWrapper';
import {
	AppBar,
	CardMedia,
	TextField,
	Stack,
	Menu,
	Dialog,
	DialogTitle,
	Box,
	IconButton,
	DialogContent,
	MenuItem,
} from '@mui/material';
import { ImageWrapper, SearchFormWrapper } from '../style';
import { Link } from 'react-router-dom';
import logo from '@Svg/logo_text_black.svg';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Index = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [search, setSearch] = React.useState('');
	const [showSearch, setShowSearch] = React.useState(false);

	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setShowSearch(false);
		navigate(`/courses/${search}`);
	};

	const displaySearch = () => {
		return (
			<SearchFormWrapper onSubmit={handleSearch}>
				<TextField
					type='search'
					id='search'
					placeholder='Search...'
					variant='standard'
					fullWidth
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					InputProps={{
						startAdornment: (
							<SearchIcon sx={{ marginRight: 1, color: 'var(--black)' }} />
						),
					}}
				/>
			</SearchFormWrapper>
		);
	};

	return (
		<AppBar
			position='sticky'
			sx={{
				background: 'white',
				marginBottom: '1rem',
				boxShadow: '0px 10px 60px rgba(38, 45, 118, 0.118)',
			}}
		>
			<Section id='navbar'>
				<Stack
					spacing={{ md: 10, lg: 25, xs: 2 }}
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}
					py={1}
				>
					<Link to='/'>
						<CardMedia
							image={logo}
							component={'img'}
							sx={{
								width: '10rem',
							}}
						/>
					</Link>
					<Box display={{ md: 'block', xs: 'none' }} width={'100%'}>
						{displaySearch()}
					</Box>
					<Stack
						spacing={{ sm: 3, xs: '12px' }}
						direction={'row'}
						color='var(--black)'
						sx={{
							'img, svg': {
								cursor: 'pointer',
							},
						}}
					>
						<SearchIcon
							onClick={() => setShowSearch(!showSearch)}
							sx={{
								display: { md: 'none', xs: 'block' },
							}}
						/>
						<AddShoppingCartIcon />
						<NotificationsNoneIcon />
						<ImageWrapper
							onClick={handleClick}
							aria-controls={open ? 'user-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							src='https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927866_960_720.jpg'
						/>
					</Stack>
				</Stack>
			</Section>
			<Menu
				id='user-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 2,
						paddingX: 1,

						svg: {
							marginRight: 1,
						},

						'&:before': {
							content: '""',
							position: 'absolute',
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
						},
					},
				}}
			>
				<MenuItem>
					<PersonIcon /> Profile
				</MenuItem>
				<MenuItem>
					<ExitToAppIcon /> Logout
				</MenuItem>
			</Menu>
			{showSearch && (
				<Dialog open={showSearch}>
					<DialogTitle>
						<Stack direction={'row'} justifyContent={'space-between'}>
							Search...
							<IconButton
								aria-label='close'
								onClick={() => setShowSearch(false)}
							>
								<CloseIcon />
							</IconButton>
						</Stack>
					</DialogTitle>
					<DialogContent>{displaySearch()}</DialogContent>
				</Dialog>
			)}
		</AppBar>
	);
};

export default Index;
