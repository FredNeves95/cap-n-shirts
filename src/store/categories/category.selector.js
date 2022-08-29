import { createSelector } from 'reselect'

const selectCategoryReducer = (state) => state.categories

export const selectorCategories = createSelector([selectCategoryReducer],
    (categories) => categories.categories)


export const selectCategories = createSelector([selectorCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category

        acc[title.toLowerCase()] = items
        return acc
    }, {}))

export const selectCategoriesIsLoading = createSelector([selectCategoryReducer], (categories) => categories.isLoading)