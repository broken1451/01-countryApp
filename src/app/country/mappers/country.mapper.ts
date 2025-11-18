
import { CountryResponse } from "../interfaces/country.interface";
import { Country } from "../interfaces/countri.interface";

export class CountryMapper {

    // para transformar la respuesta de la API a nuestro modelo de Country personalizado

    static restCountryToCountry(restCountry: CountryResponse): Country {
        return {
            capital: restCountry.capital.join(', ') || 'No Capital',
            cca2: restCountry.cca2,
            flag: restCountry.flag,
            flagSvg: restCountry.flags.svg,
            // name: restCountry.name.common,
            name: restCountry.translations["spa"].common ?? 'No Name',
            population: restCountry.population,
            region: restCountry.region,
            subregion: restCountry.subregion
        }
    }

    static restCountryToCountries(restCountries: CountryResponse[]): Country[] {
        return restCountries.map(restCountry => this.restCountryToCountry(restCountry));
    }


}


