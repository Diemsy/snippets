# ColdFusion Syntax
---

## Variables
```coldfusion
<!--- Set variable --->
<cfset myVar = 'Kris'>

<!--- Variable output --->
<cfoutput>#myVar#</cfoutput>

<!--- Variable dump --->
<cfdump var = '#myVar#'>
```

---

## Arrays
```coldfusion
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
```

---

## Structures
```coldfusion
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
```

---

## Switch
```coldfusion
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
```

---

## Decision making - if/elseif/else
```coldfusion
<!--- Decision making
  
  # Equal:                is, equal, eq
  # Not equal:            is not, not equal, neq
  # Greater than:         gt, greater than
  # Greater than equal:   gte
  # Less than:            lt, less than
  # Less than equal:      lte

  # And:                  and
  # Or:                   or

--->
<cfif myVar eq 'something'>

<cfelseif myVar eq 'something-else'>

<cfelse>
```

---

## Loops
```coldfusion
<!--- Loop --->
<cfloop from='1' to='10' index='i'>
  #i#
</cfloop>

<!--- Loop break --->
<cfloop from='1' to='10' index='i'>
  #i#
  <cfbreak>
</cfloop>

<!--- Loop skip --->
<cfloop from='1' to='10' index='i'>
  <cfif i mod 2 eq 0>
    <cfcontinue>
  </cfif>
  #i#
</cfloop>
```

---

## JSON
```coldfusion
<!--- JSON --->
<cfset myStruct = {
  'name': 'Kris',
  'city': 'Charlotte',
  'state': 'NC'
}>

<cfset toJSON = serializeJSON(myStruct)>
<cfset fromJSON = deserializeJSON(toJSON)>

<cfdump var = '#isJson(toJSON)#'>
```

---

## Functions
```coldfusion
<!--- Set function --->
<cffunction name='myFunction' output='{true|false}' access='{public|private|remote}' returnType='{void|:type}'>
  <!--- Function argument --->
  <cfargument name='myArgument' type='{:type}' required='{true|false}' default='{:default}'>
  
  <!--- Do something --->
  <cfset myVar = true>
  
  <!--- Function return --->
  <cfreturn myVar>
</cffunction>

<!--- Get function --->
<cfset myVar = myFunction('myArgument')>
```

---

## Components
```coldfusion
<!--- Set component --->
<cfcomponent>
  <!--- Set public scope --->
  <cfset this.master = 'Yoda'>

  <!--- Set private scope --->
  <cfset variables.padawan = 'Kris'>
  
  <!--- Set public function --->
  <cffunction name='getJedi' output='false' access='public' returnType='struct'>
    <cfargument name='jediId' type='integer' required='true'>
    
    <!--- Do something to get jedi data using #arguments.jediId# --->
    <cfset jedi = {}>
    
    <cfreturn jedi>
  </cffunction>
</cfcomponent>

<!--- Create an instance of component (Jedi.cfc) --->
<cfset Jedi = CreateObject('Component', 'path.to.component.Jedi')>

<!--- Access public variable --->
<cfset master = Jedi.master>

<!--- Access method --->
<cfset jedi = Jedi.getJedi(id=7)>

```
