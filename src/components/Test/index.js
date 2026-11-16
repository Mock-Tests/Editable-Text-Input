import {Component} from 'react'

import {
  MainContainer,
  InnerContainer,
  Heading,
  InputBtn,
  Input,
  Btn,
  Para,
} from './styledComponents'

class Test extends Component {
  state = {
    saveClicked: false,
    input: '',
  }

  saveClick = () => {
    this.setState(prev => ({
      saveClicked: !prev.saveClicked,
    }))
  }

  changeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input, saveClicked} = this.state
    return (
      <MainContainer className='main-container'>
        <InnerContainer className='inner-container'>
          <Heading className='heading'>Editable Text Input</Heading>
          <InputBtn className='input-btn'>
            {saveClicked ? (
              <Para className='para'>{input}</Para>
            ) : (
              <Input
                type='text'
                className='input'
                value={input}
                onChange={this.changeInput}
              />
            )}
            <Btn type='button' className='btn' onClick={this.saveClick}>
              {saveClicked ? 'Edit' : 'Save'}
            </Btn>
          </InputBtn>
        </InnerContainer>
      </MainContainer>
    )
  }
}

export default Test
