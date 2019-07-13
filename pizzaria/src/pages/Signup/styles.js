import styled from 'styled-components/native';



export const Container = styled.View`
    flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
  height: 70px;
  width: 70px;
`;

export const InputDefault = styled.TextInput`
  width: 80%;
  height: 50px;
  margin-bottom: 8px;
  padding-left: 15px;

  background-color: #FFF;
  border-radius: 8px;
`;

export const ButtonDefault = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin: 8px 0;
  justify-content: center;
  align-items: center;

  background-color: #ff1a53;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;