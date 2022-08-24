
def sessions_data(request):
    print("hello")
    try:
        print(request.session['TOKEN'])
        session = {
        "token" : request.session['TOKEN'], 
        "userID" : request.session['USERID'],
        "email": request.session['EMAIL'] ,
        "firstName": request.session['FIRSTNAME'] ,
        "middleName": request.session['MIDDLENAME'] ,
        "lastName   ": request.session['LASTNAME'] ,
        "fullName": request.session['USERID'] ,
        "accountType": request.session['ACCOUNTTYPE'] ,
        "profilePhoto": request.session['PROFILEPHOTO'] ,
        # "transactionID": request.session['TRANSACTIONID'] ,
        "transactionID": "05555",
        "userOrganizationID": request.session['USERORGANIZATIONID'] ,
        }
        return(session)
    except:
       return({"error" : "true"})
