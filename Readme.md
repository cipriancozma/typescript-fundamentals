## TypeScript Info

(![TypeScript Info](./public/ts-info.png))

## Interface vs Type Alias

A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples and any other types.
Interfaces are a way to define the structure of an object.

## Type -> unknown

The unknown type in TS is a type safe counterpart of the any type.
It's like saying that a variable could be anything, but we need to perform some type checks before we can use it.

## Type -> never

In TS, never is a type that represents the type of values that never occur. You can't assign any value to a variable of type never

## Type Guarding

Type Guarding is a term that refers to the ability to narrow down the type of an object within a certain scope. This is usually done by using conditional statements that check the type of an object.
