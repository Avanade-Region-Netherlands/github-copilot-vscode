function skillsMember() {
  var skills = document.getElementById("skills");
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("memberSkills");

  if (skills.value == "member") {
    member.style.display = "block";
    memberSkills.style.display = "none";
  } else {
    member.style.display = "none";
    memberSkills.style.display = "block";
  }
}