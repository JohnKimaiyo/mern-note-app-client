import React, { useEffect } from "react";
import noteStore from "../stores/notesStore"
export default function NotesPage() {
    const store = notesStore();

    // use effect
    useEffect(()=>{
        store.fetch(Notes);
    },[]);

    
  return (
    <div>
      <Notes />
      <UpdateForm />
      <CreateForm />
    </div>
  );
}
