import React, { useEffect, useState } from "react"
import { auth, db } from "../firebaseConfig"
import { collection, getDocs, where } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"

const UserPage = () => {
  const [data, setData] = useState([])
  const [user, loading] = useAuthState(auth)
  const Navigate = useNavigate()
  const fetchUserData = async () => {
    const collectionRef = await collection(db, "Results")
    const { uid } = auth.currentUser
    let tempData = []
    const snapshots = await getDocs(collectionRef, where("userId", "==", uid))
    snapshots.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
      tempData.push({ ...doc.data() })
    })
    setData(tempData)
  }
  useEffect(() => {
    if (!loading) {
      fetchUserData()
    }
    if (!loading && !user) {
      Navigate("/")
    }
  }, [loading])

  return <div>UserPage</div>
}

export default UserPage
