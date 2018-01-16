export function someThingWentWrong(bool) {
    return {
        type: 'DONT_PANIC',
        hasErrored: bool
    };
}

export function isLoading(bool) {
    return {
        type: 'IS_LOADING',
        isLoading: bool
    };
}

export function fetchDataSuccess(flatBondList) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        flatBondList
    };
}

export function fetchFlatBondsData(url) {
    return (dispatch) => {
        dispatch(isLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(isLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((flatBondList) => dispatch(fetchDataSuccess(flatBondList)))
            .catch(() => dispatch(someThingWentWrong(true)));
    };
}

export function addFlatBond(flatbond) {
    return {
        type: 'CREATE_NEW_FLATBOND',
        flatbond
    };
}
