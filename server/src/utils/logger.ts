import logger from 'pino';
import dayjs from 'dayjs';

const log = logger ({
    base: {
        pid: false,
    },
    timestamp: () => dayjs().format('YYYY-MM-DD HH:mm:ss'),
})