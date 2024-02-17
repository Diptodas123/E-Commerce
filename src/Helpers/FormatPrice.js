const FormatPrice = ({ price }) => {
    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2
    }).format(price / 100);     //to convert from paisa to rupee
}

export default FormatPrice;