import { defineStore } from 'pinia'

export const useMealsStore = defineStore({
    id: 'special',
    state: () => ({
        meals: []
    }),
    getters: {
        sortBySpecial: (state) => {
            return state.meals.sort((a,b)=>{
            let fa = a.special.toLowerCase(),
                fb = b.special.toLowerCase();
            if (fa > fb) {
                return 1;
            }
            if (fa < fb) {
                return -1;
            }
            return 0;
            })
        }
    },
    actions: {}
})