import { Grid, Skeleton } from '@mui/material';

const MoviesSkeleton = () => {
    return (
        <Grid
            container
            size={{ sm: 6, md: 4, lg: 3, xl: 2 }}
            sx={{
                padding: '10px',
                gap: '40px',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
            }}
        >
            {Array.from({ length: 12 }).map((_, index) => (
                <Skeleton
                    width={220}
                    height={500}
                    sx={{ borderRadius: '20px' }}
                    key={index}
                />
            ))}
        </Grid>
    );
};

export default MoviesSkeleton;
