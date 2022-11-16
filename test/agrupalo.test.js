import { expect, test } from "vitest"
import { makeGroups } from './util'

//Hacer test del boton clear haciendo un match a ""

test('make random groups', () => {
    const groupList = ['Juan','Pepe','Lisa','Angel']
    const numGroups = 2
    const result = makeGroups(groupList,numGroups)
    const resultExpect = /Grupo 1: (Juan|Pepe|Lisa|Angel),(Juan|Pepe|Lisa|Angel)<br>Grupo 2: (Juan|Pepe|Lisa|Angel),(Juan|Pepe|Lisa|Angel)<br>/
    expect(result).toMatch(resultExpect)
})

test('make random groups 1 out', () => {
    const groupList = ['Juan','Pepe','Lisa','Angel','Bea']
    const numGroups = 2
    const result = makeGroups(groupList,numGroups)
    const resultExpect = /Grupo 1: (Juan|Pepe|Lisa|Angel|Bea),(Juan|Pepe|Lisa|Angel|Bea)<br>Grupo 2: (Juan|Pepe|Lisa|Angel|Bea),(Juan|Pepe|Lisa|Angel|Bea)<br>Queda sin grupo: (Juan|Pepe|Lisa|Angel|Bea)/
    expect(result).toMatch(resultExpect)
})