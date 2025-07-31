import { Box, Grid, Skeleton } from '@mui/material';

const ActorSkeleton = () => {
    return (
        <>
            {/* <Grid container size={{ sm: 12, lg: 5, xl: 4 }} spacing={3}> */}
            <Grid container spacing={3}>
                <Grid size={{ sm: 12, lg: 5, xl: 4 }}>
                    <Skeleton height={700} width={500} variant="rectangle" />
                </Grid>
                <Grid
                    size={{ lg: 7, xl: 8 }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        flexDirection: 'column',
                    }}
                >
                    <Skeleton variant="rectangle" width={350} height={100} />
                    <Skeleton variant="rectangle" width={250} height={70} />
                    <Box>
                        <Skeleton />
                        <Skeleton />
                    </Box>
                    <Box
                        marginTop="2rem"
                        display="flex"
                        justifyContent="space-around"
                    >
                        <Skeleton width={60} height={40} />
                        <Skeleton width={60} height={40} />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default ActorSkeleton;
