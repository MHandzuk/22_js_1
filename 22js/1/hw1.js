let a = prompt("Представьтесь пожалуйста!"),
  func = function(e) {
    alert(e ? `Salam! ${e}!` : "жаль, что вы не представились");
  };
func(a);
