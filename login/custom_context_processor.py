
def sessions_data(request):
    print("hello")
    try:
        print(request.session['TOKEN'])
        session = {
            "hey" : request.session['TOKEN']
        }
        return(session)
    except:
       return({"error" : "true"})