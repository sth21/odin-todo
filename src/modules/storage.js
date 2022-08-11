const storage = (() => {
    let inbox = [];
    let today = [];
    let projects = [];

    return {inbox, today, projects}
})();

export default storage;