<cfcomponent>
  
  <cffunction name="generateSaltAndHashedPassword" output="false" access="private" returnType="struct">
    <cfargument name="password" type="string" required="true">
    
    <cfset variables.salt = Hash(GenerateSecretKey("AES"), "SHA-512") /> 
    <cfset variables.hashedPassword = Hash(arguments.password & variables.salt, "SHA-512") />
    
    <cfreturn variables />
  </cffunction>
  
  <cffunction name="validateCredentials" output="false" access="private" returnType="struct">
    <cfargument name="username" type="string" required="true">
    <cfargument name="password" type="string" required="true">

    <cfset variables.isAuthorized = false />
    
    <cfquery name="request.getPasswordAndSalt" datasource="application.dsn#">
      select  thepassword, salt
      from    users
      where   email = <cfqueryparam cfsqltype="cf_sql_varchar" value="#arguments.username#" maxlength="50" />
    </cfquery>
    
    <cfif request.getPasswordAndSalt.RecordCount eq 1>
      <cfif request.getPasswordAndSalt.thepassword eq Hash(form.password & request.getPasswordAndSalt.salt, "SHA-512", "utf-8")>
        <cfset variables.isAuthorized = true />
      <cfelse>
        <cfset variables.message = "Incorrect password" />
      </cfif>
    <cfelse>
      <cfset variables.message = "Incorrect username" />
    </cfif>
    
    <cfreturn variables />
  </cffunction>
  
</cfcomponent>