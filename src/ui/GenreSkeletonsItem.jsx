import { ListItem, ListItemIcon, ListItemText, Skeleton } from '@mui/material';

const GenreSkeletonsItem = () => {
    return (
        <ListItem>
            <ListItemIcon>
                <Skeleton variant="circular" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>
                <Skeleton variant="rectangular" width={120} height={30} />
            </ListItemText>
        </ListItem>
    );
};

export default GenreSkeletonsItem;
