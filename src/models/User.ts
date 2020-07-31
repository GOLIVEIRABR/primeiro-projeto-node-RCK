import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'; // decorator
/**
 * appointments = nome da tabela @decorator: pega a função Entity e
como parâmetro irá enviar a classe Appointment. Ou seja, toda vez que
um model for salvo, os dados serão enviados para a tabela 'appointments'
 */
@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
