

interface Props {
    avatar: string
    name: string
    date: string
    gender: 'male' | 'female'
}
export function  Couple(props: Props){
    const {name, avatar, gender, date} = props
return (
    <div className={'couple'}>
        <figure className={'lg:w-32 lg:h-32 w-20 h-20 rounded-full aspect-square overflow-hidden'}>
            <img  className={'w-full h-full object-cover object-center'}     src={avatar}
                      alt={name} />
        </figure>
        <p>{name}</p>
        <div>
            <p>{date}</p>
        </div>
    </div>
)
}
