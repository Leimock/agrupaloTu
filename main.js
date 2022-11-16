import './style.css'
import { makeGroups } from './util'

document.getElementById('clean').addEventListener('click', clear)
document.getElementById('make_group').addEventListener('click', makeGroup)

function clear() {
  const num_groups = document.getElementById('groups')
  const students = document.getElementById('students')
  const result_groups = document.getElementById('final_groups')

  num_groups.value = ''
  students.value = ''
  result_groups.innerHTML = ''
}

function makeGroup() {
  const num_groups =  parseInt(document.getElementById('groups').value)
  const students = document.getElementById('students')
  const nameList = students.value.split('\n')
  const result_groups = document.getElementById('final_groups')
  
  if (!num_groups) result_groups.innerHTML = 'Debes definir el tamaño de los grupos con un entero'
  else if (!students.value) result_groups.innerHTML = 'Debes añadir al menos un nombre'
  else {
    const group = makeGroups(nameList, num_groups)
      result_groups.innerHTML = group
  }
}