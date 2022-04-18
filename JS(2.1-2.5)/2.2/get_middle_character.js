function getMiddle(s)
{
  //Code goes here!
  var slen=s.length;
  if(slen%2!==0)
      return s.charAt(slen/2);
  else
    return s.charAt((slen/2)-1)+s.charAt(slen/2);
}