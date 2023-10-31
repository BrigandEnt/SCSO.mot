<script setup>
import TextReader from '@/components/TextReader.vue';
import { useMealsStore } from '@/stores/meals'
import {computed} from "vue";

const storeMeals = useMealsStore()

const getHouseMap = computed(() => {
  const map = new Map()
  for (const meal of storeMeals.meals){
    const temp = {                
      unit: meal.unit,         
      unitCount: meal.unitCount,
      special: meal.special,
      lastName: meal.lastName,
      firstName: meal.firstName,
    }
    if (!map.has(meal.house)){
        map.set(meal.house,[])
    }
    let arr = map.get(meal.house)
    arr.push(temp)
    map.set(meal.house,arr)
  }
  return map
})

const getSpecialMap = computed(() => {
  const map = new Map()
  for (const meal of storeMeals.sortBySpecial){
    const temp = {              
      special: meal.special,           
      unit: meal.unit
    }
    if (!map.has(meal.special)){
        map.set(meal.special,[])
    }
    let arr = map.get(meal.special)
    arr.push(temp)
    map.set(meal.special,arr)
  }
  return map
})

</script>

<template>

  <div class="home">
    <text-reader></text-reader>

   
    <div v-for="special in getSpecialMap.keys()" :key="special">
        <h3>
              {{special}}: {{ getSpecialMap.get(special).length }}
        </h3>
        <table>
          <tr v-for="meal in getSpecialMap.get(special)" :key="special" class="specialline">
            <td> {{meal.unit}} </td>
            <td> {{meal.special}} </td>
          </tr>
        </table>
    </div>

    <br/><br/>
    
    <div v-for="house in getHouseMap.keys()" :key="house">
        <h3>
              {{house}}: {{ getHouseMap.get(house).length }}
        </h3>
        <table>
          <tr v-for="meal in getHouseMap.get(house)" :key="meal" class="specialline">
            <td> {{meal.unit}} </td>
            <td> {{meal.special}} </td>
            <td> {{meal.lastName}}, {{meal.firstName}} </td>
          </tr>
        </table>
        <br/><br/>
    </div>

<!--       

    <div v-for="house in getHouseMap.keys()" :key="house">
        <h3>
              {{house}}: {{ getHouseMap.get(house).length }}
        </h3>
        <table>
          <tr v-for="meal in getHouseMap.get(house)" :key="meal" class="specialline">
            <td> {{meal.unit}} </td>
            <td> {{meal.special}} </td>
            <td> {{meal.lastName}}, {{meal.firstName}} </td>
          </tr>
        </table>
    </div>

    -->


    <!-- <div v-for="meal in storeMeals.sortBySpecial" :key="meal">{{ meal.unit }} | {{ meal.special }} | {{ meal.lastName }}, {{ meal.firstName }}</div> -->
	</div>

</template>

<style>
</style>
