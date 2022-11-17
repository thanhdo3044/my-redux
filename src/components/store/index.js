import { configureStore } from "@reduxjs/toolkit"
import filtersRedcer from "../../reducer/index"

const store = configureStore({
    reducer: {
        filters: filtersRedcer,
    },
})

export default store;