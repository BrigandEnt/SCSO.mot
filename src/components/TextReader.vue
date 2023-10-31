
<script setup>
import { useMealsStore } from '@/stores/meals'

const storeMeals = useMealsStore()

// reads and processes file
function loadTextFromFile(ev) {
  const file = ev.target.files[0];
  const reader = new FileReader();

  reader.onload = e => {
      let fileText = e.target.result
      getMealArray(fileText);
  }
  reader.readAsText(file);
}  

// returns meal array from text
const getMealArray = (text) => {
  text = text.replaceAll(',POD: ','')
  text = text.replaceAll('\r\n','')
  text = text.replaceAll('"','')
  text = text.replaceAll('SOFT, 02/28/2023','SOFT')
  text = text.split(':')
  text.shift()

  for(const temp of text){
      const line = temp.split(',')
      if(line[1].length>0){
          const meal = {
              house: getHouse(line[0].trim()),
              unit: line[0].trim(),
              special: line[1].trim(),
              lastName: line[2],
              firstName: line[3],
              unitCount: line[9],
              jailCount: line[16],
          }
          storeMeals.meals.push(meal)
      }
  }     
}

// returns housing area name from housing unit
const getHouse = (house) => {
    switch(house.trim()){
        case 'A':
        case 'B':
        case 'C':
        case 'D':
            house = 'North';
            break;
        case 'E':
        case 'F':
        case 'G':
        case 'H':
            house = 'South'
            break;
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'P':
        case 'Q':
            house = 'West'
            break;
        case 'I':
            house = 'Intake'
            break;
        case 'O':
            house = 'O-unit'
            break;
        case 'BL':
            house = 'Blaine ST'
            break;
        case 'T':
            house = 'R&R'
            break;
        case 'R':
        case 'S':
            house = 'Rountree'
            break;
        case 'X':
            house = 'Hospital'
            break;
    }
    return house
}
    
</script>

<template>
  <label class="text-reader">
    Read File
    <input type="file" @change="loadTextFromFile">
  </label>
</template>

<style></style>