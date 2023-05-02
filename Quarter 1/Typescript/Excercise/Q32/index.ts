let current_users = ["Christian_Bale", "JhonneyDepp", "MandyMoore", "Admin", "Boota_123"];

let new_users = ["babar_azam", "mandyMoore", "baby_shark_do_do_do_do", "flying_man", "BOOTA_123"]

for (const username of new_users) {
  const isTaken: boolean = current_users.some(
    (u: string) => u.toLowerCase() === username.toLowerCase()
  );

  if (isTaken) {
    console.log(`Username "${username}" is not available.`);
  } else {
    console.log(`Username "${username}" is available.`);
  }
}