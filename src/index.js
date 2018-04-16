const StorageMiddleware = store => next => action => {
    const result = next(action);
    window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
    return result;
}