export const color = [
    "white",
    "black",
    "Red",
    "maroon",
    "beige",
    "Pink",
    "Green",
    "Yellow",
]
export const filters = [
    {
      id: 'color',
      name: 'COLOR',
      options: [
        { value: 'white', label: 'White' },
        { value: 'beige', label: 'Beige' },
        { value: 'blue', label: 'Blue'},
        { value: 'brown', label: 'Brown' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' },
        { value: 'yellow', label: 'Yellow' },
      ]
    },
    {
      id: 'size',
      name: 'SIZE',
      options: [
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' },
        { value: 'XXL', label: 'XXL' },
        { value: '3XL', label: '3XL' },
      ]
    }
  ];
  export const singlleFilter = [
    {
        id: "price",
        name: "PRICE",
        options: [
            { value: "159-399", label: "₹159 to ₹399" },
            { value: "399-999", label: "₹399 to ₹999" },
            { value: "999-1999", label: "₹999 to ₹1999" },
            { value: "1999-2999", label: "₹1999 to ₹2999" },
            { value: "3999-4999", label: "₹3999 to ₹4999" },
        ]
    },
    {
        id: "discount",
        name: "DISCOUNT RANGE",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
        ]
    },
    {
        id: "stock",
        name: "AVAILABILITY",
        options: [
            { value: "in_stock", label: "IN Stock" },
            { value: "out_stock", label: "OUT of Stock" },
        ]
    }   
  ]