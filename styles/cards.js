export const wide = {
    width: '95%',
};
export const height = {
    height: '33%',
}
export const bgcPrimary = {
    backgroundColor: '#D8B9C3',
}
export const rounded = {
    borderRadius: 25,
}
export const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
}

export const cardPrimary = {
    ...wide,
    ...height,
    ...bgcPrimary,
    ...rounded,
    ...shadow,
    marginTop: 2,
    marginBottom: 8, 
}