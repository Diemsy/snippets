# ColdFusion Syntax
---

## Variables
````coldfusion
<!--- Set variable --->
<cfset myVar = 'Kris'>

<!--- Variable output --->
<cfoutput>#myVar#</cfoutput>

<!--- Variable dump --->
<cfdump var = '#myVar#'>
````

---

## Arrays
````coldfusion
<!--- Set array --->
<cfset myArray = []>

<!--- Append item to array --->
<cfset ArrayAppend(myArray, 'Kris')>

<!--- Delete item from array --->
<cfset ArrayDelete(myArray, 'Kris')>

<!--- Delete item from array by position --->
<cfset ArrayDeleteAt(myArray, 1)>

<!--- Loop over array --->
<cfloop array='#myArray' item='item'>
  #item#
</cfloop>
````

---

## Structures
````coldfusion
<!--- Set struct --->
<cfset myStruct = {}>

<!-- Append item to struct using bracket notation --->
<cfset myStruct['name'] = 'Kris'>

<!--- Append item to struct using dot notation --->
<cfset myStruct.name = 'Kris'>

<!--- Set struct and append content in single statement --->
<cfset myStruct = {
  'name': 'Kris'
}>

<!--- Loop over a struct --->
<cfloop collection='#myStruct#' item='key'>
 #key#: #myStruct[key]#
</cfloop>
````

---

## Switch
````coldfusion
<cfset user = 'Kris'>

<cfswitch expression='#user#'>
  <cfcase value='Kris'>
  
  </cfcase>
  <cfcase value='Randy'>
  
  </cfcase>
  <cfcase value='Sean, Jake'>
  
  </cfcase>
  <cfdefaultcase>
  
  </cfdefaultcase>
</cfswitch>
````
