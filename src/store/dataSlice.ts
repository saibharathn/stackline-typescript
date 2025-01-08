import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SalesData {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

interface ProductData {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    sales: SalesData[];
}

interface DataState {
    products: ProductData[];
}

const initialState: DataState = {
    products: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductData[]>) {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = dataSlice.actions;
export default dataSlice.reducer;
