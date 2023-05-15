import Checkbox from "antd/lib/checkbox"
const BrandsFilter = ({ brands, onChange }: any) => {
    const { name, items, page, isLoaded, length, limit, currentCategory } = brands

    const transformBrandsToOptions = (brands: any[]) => {
        return brands.map((brand) => ({
            label: `${brand.name} (${brand.products})`,
            value: brand.id,
        }));
    }

    const options: any = isLoaded ? transformBrandsToOptions(items) : null

    return <Checkbox.Group
        options={options}
        onChange={onChange}
    />
}

export default BrandsFilter