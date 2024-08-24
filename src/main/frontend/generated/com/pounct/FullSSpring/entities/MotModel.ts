import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, Size as Size_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type Mot_1 from "./Mot.js";
class MotModel<T extends Mot_1 = Mot_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(MotModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, true, { meta: { annotations: [{ name: "jakarta.persistence.Id" }], javaType: "java.lang.Long" } }));
    }
    get mot(): StringModel_1 {
        return this[_getPropertyModel_1]("mot", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Size_1({ min: 1, max: 20 })], meta: { javaType: "java.lang.String" } }));
    }
    get esqueleto(): StringModel_1 {
        return this[_getPropertyModel_1]("esqueleto", (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }));
    }
    get consonneVoyelle(): ObjectModel_1<Record<string, string | undefined>> {
        return this[_getPropertyModel_1]("consonneVoyelle", (parent, key) => new ObjectModel_1(parent, key, true, { meta: { javaType: "java.util.Map" } }));
    }
}
export default MotModel;
