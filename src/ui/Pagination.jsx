import { useTheme } from '@emotion/react';
import { Button, Typography } from '@mui/material';

const Pagination = ({ page, setPage, totalPages }) => {
    const theme = useTheme();
    const handlePrev = () => {
        if (page !== 1) {
            setPage((prev) => prev - 1);
        }
    };
    const handleNext = () => {
        if (page !== totalPages) {
            setPage((prev) => prev + 1);
        }
    };
    if (totalPages === 0) return null;
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button
                onClick={handlePrev}
                size="small"
                sx={{ margin: '30px 2px' }}
                variant="outlined"
                color="primary"
            >
                Prev
            </Button>
            <Typography
                variant="h5"
                sx={{ margin: '0 20px', color: 'theme.palette.text.primary' }}
            >
                {page}
            </Typography>
            <Button
                onClick={handleNext}
                size="small"
                sx={{ margin: '30px 2px' }}
                variant="outlined"
                color="primary"
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
