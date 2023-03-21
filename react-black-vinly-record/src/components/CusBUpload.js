import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { CUS_UPLOAD } from '../api/api_config'

function CusBUpload({ dataFromChildA, setDataFromChildBUpload }) {
  //預備傳給父元素的值
  const [bData, setBData] = useState(null)
  const [avatar, setAvatar] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [defaultImageSelected, setDefaultImageSelected] = useState(null)
  const [uploadImageSelected, setUploadImageSelected] = useState(null)

  const handleUpload = (e) => {
    const file = e.target.files[0]
    const maxSize = 2 * 1024 * 1024
    if (file.size > maxSize) {
      alert('檔案大小超過2MB無法上傳，請重新選取檔案')
      e.target.value = null // clear the input field
      setSelectedFile(null) // reset selected file
      return
    } else {
      setSelectedFile(file)
      setAvatar(file)
      setBData(URL.createObjectURL(file)) // set the image URL in the state variable
      // console.log(e.target.files)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedFile) {
      alert('請先選取要上傳的檔案')
      return
    }
    // handleApi()
    setSelectedFile(null) // reset selected file after upload
  }

  // const handleApi = () => {
  //   const fd = new FormData()
  //   fd.append('avatar', avatar)
  //   axios.post(CUS_UPLOAD, fd).then((res) => {
  //     console.log(res)
  //     alert('檔案上傳成功')
  //   })
  // }

  const handleDefaultImageClick = () => {
    if (!defaultImageSelected) {
      setDefaultImageSelected(true) //使用者已經選擇了此按鈕
      setUploadImageSelected(false)
    }
  }

  const handleUploadImageClick = () => {
    if (!uploadImageSelected && !avatar) {
      // avatar 不為空值時才能選擇此按鈕
      alert('請先上傳您的圖片')
      setUploadImageSelected(false)
      setDefaultImageSelected(false)
      return
    }
    setUploadImageSelected(true)
    setDefaultImageSelected(false)
  }

  const handleToThird = (e) => {
    e.preventDefault()

    if (!dataFromChildA || !dataFromChildA.cus_image) {
      alert('請返回第一步選擇歌曲')
      window.location.assign('/Customization#first-step')
      return
    }
    if (!defaultImageSelected && !uploadImageSelected) {
      alert('請選擇一張照片製作唱片封面')
      return
    }
    if (defaultImageSelected === true) {
      setBData(dataFromChildA)
      setDefaultImageSelected(false)
    }
    if (uploadImageSelected === true) {
      setBData([dataFromChildA, URL.createObjectURL(selectedFile)]) // set the image URL from the selected file
      setUploadImageSelected(false)
    }
    window.location.assign('/Customization#third-step')
  }

  useEffect(() => {
    setDataFromChildBUpload(bData)
  }, [bData])

  console.log('avatar', avatar)
  console.log('dataFromChildA', dataFromChildA)

  return (
    <div className="t-card-group">
      {/* <!-- 左邊選單 --> */}
      <div className="d-flex justify-content-center justify-content-lg-between col-lg-8 ms-lg-8">
        <div className="d-flex align-items-center">
          <button
            className={`btn t-btn-radius me-5 ${
              defaultImageSelected ? 't-selected' : ''
            }`}
            id="DefaultImage"
            onClick={handleDefaultImageClick}
          >
            {dataFromChildA ? (
              <img
                className="t-music-second-img"
                src={`/img/card/${dataFromChildA.cus_image}`}
                alt={dataFromChildA.cus_name}
              />
            ) : (
              <img
                className="t-music-second-img"
                src={`/img/card/${dataFromChildA}`}
                alt=""
              />
            )}
          </button>
          <button
            className={`btn t-btn-radius ${
              uploadImageSelected ? 't-selected' : ''
            }`}
            id="UploadImage"
            onClick={handleUploadImageClick}
          >
            <img
              className="t-music-second-img"
              src={avatar ? URL.createObjectURL(avatar) : null}
              alt={avatar ? avatar.name : null}
            />
          </button>
        </div>
      </div>

      {/* <!-- 右邊選單 --> */}
      <div className="col-lg-4 text-center">
        {/* <!-- 手機 --> */}
        <div className="d-lg-none">
          <h3 className="mt-6 mb-0">IMAGE</h3>
          <h5>選擇您的照片</h5>

          <div className="my-10">
            <label htmlFor="formFileMultiple" className="form-label text-info">
              僅能上傳 JPEG PNG 檔
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
        </div>

        {/* <!-- 電腦 --> */}
        <div className="d-none d-lg-block">
          <h1>IMAGE</h1>
          <h2>選擇您的照片</h2>

          <div className="mx-12 my-14">
            <h5 className="text-info mb-3">
              僅能上傳大小2MB以內的 JPEG/PNG 檔
            </h5>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-5"
                type="file"
                name="avatar"
                id="file-input"
                accept="image/png, image/jpeg"
                onChange={handleUpload}
                multiple
              />
              {/* <button
                type="submit"
                className="btn btn-success text-nowrap"
                onSubmit={handleApi}
              >
                上傳圖片 
              </button>*/}
            </form>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <a href="#third-step">
            <button
              className="btn p-0 d-flex t-step-hover"
              onClick={handleToThird}
            >
              <h5 className="mb-0 d-lg-none t-step-hover">下一步</h5>
              <h3 className="mb-0 d-none d-lg-block t-step-hover">下一步</h3>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CusBUpload
