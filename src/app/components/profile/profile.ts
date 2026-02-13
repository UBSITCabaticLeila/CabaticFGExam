interface UserProfile {
  name: string;
  email: string;
  age: number;
  location: string;
  bio: string;
}

export class ProfileComponent {
  user: UserProfile = {
    name: "Leila Marie Cabatic",
    email: "leila@example.com",
    age: 20,
    location: "Philippines",
    bio: "BSIT 2nd Year Student"
  };
}
