import React, { FC, useState, ChangeEvent } from 'react'

const Demo: FC = () => {
  // const [text, setText] = useState<string>('hello')

  // function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
  //   setText(event.target.value)
  // }

  // function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //   setText(event.target.value)
  // }

  // function getHtml() {
  //   return { __html: text.replaceAll('\n', '<br>') }
  // }

  // const [gender, setGender] = useState('woman')

  // function handleChangeRadio(event: ChangeEvent<HTMLInputElement>) {
  //   setGender(event.target.value)
  // }

  // const [checked, setChecked] = useState(false)
  // function toggleChecked() {
  //   setChecked(!checked)
  // }

  // const [selectedCityList, setSelectedCityList] = useState<string[]>([])
  // function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
  //   const city = event.target.value
  //   // state是不可变数据
  //   if (selectedCityList.includes(city)) {
  //     // 移除
  //     setSelectedCityList(
  //       selectedCityList.filter((c) => {
  //         if (c === city) return false
  //         return true
  //       })
  //     )
  //   } else {
  //     // 添加
  //     setSelectedCityList(selectedCityList.concat(city))
  //   }
  // }

  // const [lang, setLang] = useState('js')
  // function changeLang(event: ChangeEvent<HTMLSelectElement>) {
  //   setLang(event.target.value)
  // }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault() // 阻止默认行为

    // 下面可以写JS自己提交数据的逻辑
  }

  // React 表单组件总结：
  // 1. input
  // 2. textarea
  // 3. radio
  // 4. checkbox
  // 5. select

  return (
    <div>
      {/* <div>Form element demo</div> */}
      {/* demo1 - input */}
      {/* <input value={text} onChange={handleInputChange} />
      <br /> */}
      {/* demo2 - textarea */}
      {/* <textarea value={text} onChange={handleTextareaChange} />
      <p dangerouslySetInnerHTML={getHtml()}></p> */}
      {/* demo3 - 单选 */}
      {/* <p>select element {gender}</p>
      <label htmlFor="radio1">男</label>
      <input
        type="radio"
        id="radio1"
        name="gender"
        value="man"
        checked={gender === 'man'}
        onChange={handleChangeRadio}
      />
      <label htmlFor="radio2">女</label>
      <input
        type="radio"
        id="radio2"
        name="gender"
        value="woman"
        checked={gender === 'woman'}
        onChange={handleChangeRadio}
      /> */}
      {/* demo4 - 多选 */}
      {/* <label htmlFor="">选中</label>
      <input
        type="checkbox"
        id="checkbox1"
        checked={checked}
        onChange={toggleChecked}
      />
      <p>{checked.toString()}</p> */}
      {/* demo5 - 城市多选 */}
      {/* <label htmlFor="">北京</label>
      <input
        type="checkbox"
        id="checkbox1"
        value="beijing"
        checked={selectedCityList.includes('beijing')}
        onChange={handleCityChange}
      />
      <label htmlFor="">上海</label>
      <input
        type="checkbox"
        id="checkbox2"
        value="shanghai"
        checked={selectedCityList.includes('shanghai')}
        onChange={handleCityChange}
      />
      <label htmlFor="">深圳</label>
      <input
        type="checkbox"
        id="checkbox3"
        value="shenzheng"
        checked={selectedCityList.includes('shenzheng')}
        onChange={handleCityChange}
      />
      <p>{JSON.stringify(selectedCityList)}</p>
      隐藏域
      <input
        type="hidden"
        name="cities"
        value={JSON.stringify(selectedCityList)}
      /> */}

      {/* demo6 - select */}
      {/* <select name="" id="" value={lang} onChange={changeLang}>
        <option value="java">java</option>
        <option value="js">js</option>
        <option value="css">css</option>
      </select>
      {lang} */}

      {/* demo7 - form */}
      <div>
        <form action="/api/post" onSubmit={handleSubmit}>
          <input type="text" name="key1" value="key1" />
          <br />
          <textarea name="key2" value="key2" id=""></textarea>
          <input type="hidden" name="key3" value="key3" />
          <button type="submit">提交</button>
          <br />
        </form>
      </div>
    </div>
  )
}

export default Demo
