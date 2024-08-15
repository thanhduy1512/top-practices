import { supabase } from "./supabaseClient";

export async function seedDatabase() {
  const { data, error } = await supabase.rpc("seed_database");

  if (error) {
    console.error("Error seeding database:", error);
  } else {
    console.log("Database seeded successfully:", data);
  }
}
