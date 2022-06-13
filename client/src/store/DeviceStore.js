import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
        ]
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12", img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.router-switch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fb90fceee6a5fa7acd36a04c7b968181c%2Fi%2Fp%2Fiphone-12-pro.jpg&imgrefurl=https%3A%2F%2Fwww.router-switch.com%2Fiphone-12-pro.html&tbnid=6Ei6i5L0q_VqwM&vet=12ahUKEwjul9yE36j4AhUj_SoKHQsIBm8QMygEegUIARDHAQ..i&docid=rYfxvUZ3jVCWHM&w=600&h=600&q=iphone%2012%20pro&ved=2ahUKEwjul9yE36j4AhUj_SoKHQsIBm8QMygEegUIARDHAQ', rating: 5},
            {id: 2, name: "Iphone 13", img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.router-switch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fb90fceee6a5fa7acd36a04c7b968181c%2Fi%2Fp%2Fiphone-12-pro.jpg&imgrefurl=https%3A%2F%2Fwww.router-switch.com%2Fiphone-12-pro.html&tbnid=6Ei6i5L0q_VqwM&vet=12ahUKEwjul9yE36j4AhUj_SoKHQsIBm8QMygEegUIARDHAQ..i&docid=rYfxvUZ3jVCWHM&w=600&h=600&q=iphone%2012%20pro&ved=2ahUKEwjul9yE36j4AhUj_SoKHQsIBm8QMygEegUIARDHAQ', rating: 5},
        ]
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }


    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
    
}