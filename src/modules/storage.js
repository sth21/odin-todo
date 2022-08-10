const storage = (() => {
    let inbox = [];
    let today = [];
    let week = [];
    let projects = [];

    return {inbox, today, week, projects}
})();

export default storage;