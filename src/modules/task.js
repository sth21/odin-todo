 export const taskFactory = (title, description, date, isPriority) => {
    return {title, description, date, priorityStatus: isPriority};
};