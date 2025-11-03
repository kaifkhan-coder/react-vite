import React from "react";
import Card from "./component/Card";
const App = () => {
  return (
    <div className='parent'>
      <Card user='Khan Mohammed Kaif' img='https://images.unsplash.com/photo-1760443267021-8df5fa55204e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332'  />
      <Card user='Khan Kaif'img='https://images.unsplash.com/photo-1733151451018-a989940612c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332' />
      <Card user='Khan Ayaan'img='https://plus.unsplash.com/premium_photo-1759672144486-79de6c2317cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170' />

    </div>
    )
}

export default App;
