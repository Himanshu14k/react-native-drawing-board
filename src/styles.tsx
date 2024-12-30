import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  toolbar: {
    flex:1, 
    
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  activeBtn: {
    borderRadius: 50,
    backgroundColor: '#d3d0fb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    backgroundColor: '#d1f7c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarButton: {
    fontSize: 16,
    color: '#000',
  },
  activeToolbarButton: {
    fontSize: 18,
    color: '#2412ed',
    fontWeight: "600"
  },
  page: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    textAlignVertical: 'top',
  },
  drawingArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  btn3: {
    backgroundColor: "#d0cffa",
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10
  },
  btn4: {
    position: "absolute",
    bottom: 10,
    left: 10,
    zIndex: 999,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10
  },
  title4: {
    color: "#fff",
    fontSize: 14,
    fontWeight: '500',
    textAlign: "center"
  },
  btn2: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 999,
    height: 60,
    width: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 0,
    elevation: 30,
    shadowColor: "#fff",
    // marginRight: 30
  },
  btn9: {
    position: "absolute",
    top: 90,
    left: 10,
    zIndex: 999,
    height: 60,
    width: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 0,
    elevation: 30,
    shadowColor: "#fff",
    // marginRight: 30
  },
  btn5: {
    position: "absolute",
    top: 10,
    left: 90,
  },
  btn8: {
    position: "absolute",
    top: 10,
    right: 20,
    zIndex: 999,
    height: 60,
    width: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 0,
    elevation: 30,
    shadowColor: "#fff",
  },
  btn6: {
    position: "absolute",
    bottom: 10,
    right: 20,
    zIndex: 999,
    height: 60,
    width: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 0,
    elevation: 30,
    shadowColor: "#fff",
  },
  btn7: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 10
  },
  icon1: {
    tintColor: "#000"
  }
});

export default styles;