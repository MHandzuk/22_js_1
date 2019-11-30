let a = prompt("Представьтесь пожалуйста!"),
  func = function(e) {
    alert(e ? `Hello! ${e}!` : "жаль, что вы не представились");
  };
func(a);
