function validateform (){
    let u=document.forms['f1']['username'].value;
    let e=document.forms['f1']['email'].value;
    let p=document.forms['f1']['password'].value;
    let l=[]
    for (i=0;i<u.length;i++){l.push(u[i])}
    let l1=l[0]
    let l2=l1.toUpperCase();
    if (l1!=l2 || !isNaN(parseInt(l1))){
    alert("Username should start with Uppercase letter");}
    let u1=0;        
    for (i=0;i<u.length;i++){
        if (!isNaN(parseInt(l[i]))){
        u1=u1+1;}}
    if (u1<1){alert("The username must have at least one digit");}
    let p1=p.length
    if ( p1<8 || p1>20){
        alert("password length should be between 8 and 20");
        return false;
    }
    let p2 = false;
    let p3 = false;

    for (i = 0; i < p.length; i++) {
    if (p[i] === p[i].toUpperCase() && isNaN(parseInt(p[i]))) {
    p2 = true;
    }
    if (p[i] === p[i].toLowerCase() && isNaN(parseInt(p[i]))) {
    p3 = true;
    }
    }
    if (!p2) {
    alert("Password should contain an uppercase letter");
    }
    if (!p3) {
    alert("Password should contain a lowercase letter");
        }
    let specialCharPresent = false;
    let specialChars = /[!@#$%^&*()_+{}\[\]<>?~\\/-]/;
    for (i = 0; i < p.length; i++) {
    if (specialChars.test(p[i])) {specialCharPresent = true; }
    }
    if (!specialCharPresent) {
    alert("Password should contain at least one special character excluding ., ;, :");}


}